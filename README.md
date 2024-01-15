## Run test
1. Navigate to the root folder
2. Run `npm install`
3. Run  `npm run wdio`

(Tests will fail due to no access rights to Volvo production)

## Run in Docker
1. Run `docker build -t mytest -f Dockerfile .`
2. Run `docker run -it mytest`


## Test scenarios covered

### Cookie consent
Testing deletion and acceptance of cookie consent

### Visibility tests
Testing the main title/header of the page to verify the text

Testing a menu item to verify the correct text

### Accessibility tests
Fetching accessibility results in a report

### Interaction tests
Testing the "features" menu item

Testing the "Child safety" menu item

Testing a promotion "read more"
