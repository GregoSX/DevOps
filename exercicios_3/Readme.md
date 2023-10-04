# Exercícios 3 - Kubernets - Pod, ReplicaSet e Deployments

Objetivo: Crie, inspecione e delete um POD.

1. Crie um POD chamado my-first-pod com a imagem nginx. Utilize a forma declarativa
(yaml/json) e imperativa (comando)
2. Liste todos os PODs para verificar se foi criado.
3. Inspecione o POD para obter detalhes adicionais.
4. Delete o POD

Criar o arquivo yml e executar os seguintes comandos

```
kind create cluster
```

```
kubectl apply -f my-first-pod.yaml
```

```
kubectl get pods
```

```
kubectl describe pod my-first-pod
```

```
kubectl delete pod my-first-pod
```
--- 

Objetivo: Crie um ReplicaSet para garantir que sempre tenhamos três réplicas de um POD
em execução.

1. Crie um arquivo chamado my-replicaset.yaml com o seguinte conteúdo
2. Liste e verifique o status do ReplicaSet e os PODs em execução.
3. Delete o ReplicaSet.

Criar o arquivo yml e executar os seguintes comandos

```
kubectl apply -f my-replicaset.yaml
```

```
kubectl get pod
```

```
kubectl delete replicaset my-replicaset
```
---

Objetivo: Crie um Deployment, atualize a imagem e realize um rollback.

1. Crie um Deployment chamado my-deployment usando a imagem nginx:1.14.2.
2. Verifique o status do Deployment.
3. Atualize a imagem do Deployment para nginx:1.16.1
4. Verifique o progresso da atualização.
5. Simule uma situação onde a nova versão tem um problema. Realize um rollback
para a versão anterior.
6. Delete o Deployment.

Criar o arquivo yml e executar os seguintes comandos

```
kubectl apply -f my-deployment.yaml
```

```
kubectl get pod
```

```
kubectl apply -f my-deployment.yaml
```

```
kubectl rollout undo deployment/my-deployment
```

```
kubectl delete deployment my-deployment
```