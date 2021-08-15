# auth

## auth/login
auth: none
- POST /auth/login

## auth/register
auth: none
- POST /auth/register

# company

## company/create
auth: authenticated
- POST /company

## company/details
auth: companyEmployee
- GET /company

## company/manage
auth: companyOwner
- PUT /company
- POST /company/add-employee
- PUT /company/role

# group

## group/create
auth: companyAdmin
- POST /group

## group/details
auth: groupMember
- GET /group/{groupId}/posts
- POST /post
- POST /post/{postId}/comment
- POST /post/{postId}/like

auth: postOwner
- PUT /post/{postId}
- DELETE /post/{postId}

auth: groupAdmin
- DELETE /post/{postId}/comment

## group/manage
auth: groupAdmin
- PUT /group/{groupId}
- GET /group/{groupId}/pending-requests
- POST /group/{groupId}/process-request
- POST /group/{groupId}/add-member

auth: companyOwner
- DELETE /group/{groupId}/delete-member
- PUT /group/{groupId}/revoque-group-admin-role

## group/overview
auth: companyEmployee
- GET /company/groups

# profile

## profile/details
auth: authenticated
- GET /user

## profile/manage
auth: authenticated
- PUT /user

# navigation
auth: companyEmployee
- GET /company/groups
- GET /company
