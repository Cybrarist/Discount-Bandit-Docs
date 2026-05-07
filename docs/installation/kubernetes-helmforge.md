# Kubernetes with HelmForge

::: info
The HelmForge chart is a third-party Kubernetes installation option maintained by the HelmForge project.
The Docker and Docker Compose installation methods remain the primary installation paths maintained by Discount Bandit.
:::

If you run self-hosted applications on Kubernetes, you can deploy Discount Bandit with the community Helm chart provided by [HelmForge](https://helmforge.dev/docs/charts/discount-bandit/).

## Requirements

- A working Kubernetes cluster.
- Helm 3 installed locally.
- A default `StorageClass` or an existing PersistentVolumeClaim for SQLite persistence.
- Optional: an Ingress controller if you want to expose Discount Bandit with a public hostname.

## Add the HelmForge repository

```shell
helm repo add helmforge https://repo.helmforge.dev
helm repo update
```

## Create a values file

```yaml
# values.yaml
fullnameOverride: discount-bandit

discountBandit:
  appUrl: "http://localhost:8080"
  extraEnv:
    - name: APP_TIMEZONE
      value: "UTC"
    - name: THEME_COLOR
      value: "Stone"

persistence:
  enabled: true
  size: 5Gi

service:
  type: ClusterIP
  port: 80
```

::: tip
For a public installation, set `discountBandit.appUrl` to the external URL where users will access Discount Bandit.
:::

## Install the chart

```shell
kubectl create namespace discount-bandit

helm install discount-bandit helmforge/discount-bandit \
  --namespace discount-bandit \
  --values values.yaml
```

## Access the application locally

If you are not using Ingress yet, forward the service to your local machine:

```shell
kubectl port-forward \
  --namespace discount-bandit \
  svc/discount-bandit 8080:80
```

Then open `http://localhost:8080` in your browser and create the admin account.

## Expose with Ingress

For a public installation, enable Ingress and update `discountBandit.appUrl` to the same hostname:

```yaml
discountBandit:
  appUrl: "https://deals.example.com"

ingress:
  enabled: true
  ingressClassName: nginx
  hosts:
    - host: deals.example.com
      paths:
        - path: /
          pathType: Prefix
  tls:
    - hosts:
        - deals.example.com
      secretName: discount-bandit-tls
```

## Environment variables

You can pass additional Discount Bandit environment variables with `discountBandit.extraEnv`.
For the list of available variables, see the [Environments](/installation/environments) page.

```yaml
discountBandit:
  extraEnv:
    - name: EXCHANGE_RATE_API_KEY
      value: "your-api-key"
    - name: CRON
      value: "*/5 * * * *"
```

## Persistence

The chart persists the SQLite database on a Kubernetes PersistentVolumeClaim.
The default access mode is `ReadWriteOnce`, and the chart runs a single application instance.

```yaml
persistence:
  enabled: true
  size: 5Gi
  storageClass: ""
```

## More information

- [HelmForge Discount Bandit chart documentation](https://helmforge.dev/docs/charts/discount-bandit/)
- [HelmForge chart source](https://github.com/helmforgedev/charts/tree/main/charts/discount-bandit)
