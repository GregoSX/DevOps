# Passos para realizar o exercício

1. Criar os arquivos nd1, ns2, hmg-deployment.yaml e dev-deployment.yaml

2. Iniciar o cluster:
    `kind create cluster`

3. Configurar kubectl para o Cluster Kind:
    `kubectl cluster-info --context kind-kind`

4. Aplicação dos Arquivos YAML no Cluster:

    `kubectl apply -f ns1.yaml`
    `kubectl apply -f ns2.yaml`
    `kubectl apply -f dev-deployment.yaml`
    `kubectl apply -f hmg-deployment.yaml`

5. Testando a comunicação:

    `kubectl exec -it myapp-dev -n dev -- /bin/bash`

- Dentro do shell do pod, execute o comando CURL para acessar o serviço no namespace hmg:

    `curl myapp-service-hmg.hmg.svc.cluster.local`