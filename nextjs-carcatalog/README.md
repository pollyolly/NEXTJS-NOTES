### Start Project Dev
```
$ npm run dev
```
### Docker

### Step1: Build Image
```
$ docker build -t nextjs-carcatalog .
```
### Step2: Run Image

Inside and Out port 3000:3000, nextjs-carcatalog image name
```
$ docker run -dp 3000:3000 nextjs-carcatalog
```