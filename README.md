```
curl -X POST \
  http://localhost:3000/user/ \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 58765' \
  -H 'Content-Type: multipart/form-data; boundary=--------------------------196407913936597409337074' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 9a8aaa97-46ce-4a86-b1ae-18667f25293f,795bd812-6206-4b13-82c7-704dde33d1d3' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F firstname=Nara \
  -F lastname=Singhe \
  -F email=nara@gmail.com \
  -F password=nara@123 \
  -F avatar=@/home/kanishka/Pictures/cloudflare.png
```

```
$ curl -X GET http://localhost:3000/user/7 -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo3LCJpYXQiOjE1NzQ4NzU5MjJ9.DyK8QSs6-W02eZbzhGQooiv2Wp0Gt0tlXS4CVLp614s'
```

```
curl -X PUT \
  http://localhost:3000/user/8 \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo4LCJpYXQiOjE1NzQ5ODgxNjd9.hb8qTfYSNrXemC09-l3nrKJRYlfMjs-AR0L-Kj_TL5k' \
  -H 'Cache-Control: no-cache' \
  -H 'Connection: keep-alive' \
  -H 'Content-Length: 58421' \
  -H 'Content-Type: multipart/form-data; boundary=--------------------------386459421241738453725224' \
  -H 'Host: localhost:3000' \
  -H 'Postman-Token: 436f8303-be22-47ee-ad29-d8c459df5b4f,7c875821-baea-4a69-a5f8-bf39240e0e1e' \
  -H 'User-Agent: PostmanRuntime/7.19.0' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F 'firstname=Jone C' \
  -F avatar=@/home/kanishka/Pictures/cloudflare.png
```

```
$ curl -X DELETE http://localhost:3000/user/7 -H 'Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvbmUuZG9lQGV4YW1wbGUuY29tIiwidXNlcklkIjo3LCJpYXQiOjE1NzQ4NzU5MjJ9.DyK8QSs6-W02eZbzhGQooiv2Wp0Gt0tlXS4CVLp614s'
```
