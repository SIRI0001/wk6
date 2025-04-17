This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# 1. POST Request
Using curl:
To send a POST request with a JSON body:

bash:
curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d '{"name": "Alice", "lineStatus": "online"}'
Using PowerShell:
To send a POST request with a JSON body:

powershell:
$url = "http://localhost:3000/api/users"
$headers = @{ "Content-Type" = "application/json" }
$body = '{"name": "Alice", "lineStatus": "online"}'

$response = Invoke-WebRequest -Uri $url -Method Post -Body $body -Headers $headers

Write-Host "Response:" $response.Content

# 2. GET Request
Using curl:
To fetch all users or a specific user:

bash:
# Fetch all users
curl -X GET http://localhost:3000/api/users

# Fetch a specific user (replace '1' with the user ID)
curl -X GET http://localhost:3000/api/users/1
Using PowerShell:
To fetch all users or a specific user:

powershell:
# Fetch all users
$url = "http://localhost:3000/api/users"
$response = Invoke-WebRequest -Uri $url -Method Get

Write-Host "Response:" $response.Content

# Fetch a specific user (replace '1' with the user ID)
$url = "http://localhost:3000/api/users/1"
$response = Invoke-WebRequest -Uri $url -Method Get

Write-Host "Response:" $response.Content

# 3. PATCH Request
Using curl:
To update an existing user's lineStatus:

bash:
curl -X PATCH http://localhost:3000/api/users/1 \
    -H "Content-Type: application/json" \
    -d '{"lineStatus": "offline"}'
Using PowerShell:
To update an existing user's lineStatus:

powershell:
$url = "http://localhost:3000/api/users/1"  # The URL with the user ID
$headers = @{ "Content-Type" = "application/json" }
$body = '{"lineStatus": "offline"}'

$response = Invoke-WebRequest -Uri $url -Method Patch -Body $body -Headers $headers

Write-Host "Response:" $response.Content

# 4. DELETE Request
Using curl:
To delete a user by id:

bash:
curl -X DELETE http://localhost:3000/api/users/1 \
    -H "Content-Type: application/json"
Using PowerShell:
To delete a user by id:

powershell:
$url = "http://localhost:3000/api/users/1"  # The URL with the user ID
$headers = @{ "Content-Type" = "application/json" }

$response = Invoke-WebRequest -Uri $url -Method Delete -Headers $headers

Write-Host "Response:" $response.Content


## Extra:
GET Request:
http://localhost:3000/api/test/

POST Request:
curl -X POST http://localhost:3000/api/test -H "Content-Type: application/json" -d '{"id": "Alice"}'

Powershell
 Invoke-WebRequest -Uri http://localhost:3000/api/test -Method POST -Headers @{ "Content-Type" = "application/json" } -Body '{"id": "Alice"}'