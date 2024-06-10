Workflow:

Quick force restart command:
```
docker stop tennis-container && docker rm tennis-container && docker rmi tennis-image && docker build -t tennis-image . && docker run --name tennis-container -p 80:80 -v $(pwd):/code -d tennis-image
```