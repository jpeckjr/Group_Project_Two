# Group_Project_Two

# Errors

* Use Try and catch
* Write assert functions for testing
* Separate test js file
* Use chai node package
* nightmare for ui testing


# Pages

### Login & Account Registration

* Title & description
* Login form
    * Username
    * Password
* Registration form with fields for
    * Username
    * Email
    * Password
    * Confirm password
* After submitting form display a modal for success or failure

### Search

* UI element with username displayed and ablility ot logout
* Search box (text input)
* Search button
* Saved Searches
* Map with pins
* Table with top results
* Button to save

# Paths

## Public paths

#### '/home'
* Type: GET
* Description: Login & Account Registration; all requests get redirected here prior to login 

#### '/search'
* Type: GET
* Description Search page that also displays results

#### '/api/register'
* Type: POST
* Description Destination for registration form
* Request: JSON object
    ```javascript
    {
        "username": "ndkivi",
        "email": "kivnd@internet.net",
        "password": "qwerty0987!#"
    }
    ```
* Response: JSON object with
    ```javascript
    {
        "success": "true",
        "error": "",
        "username": "ndkivi"
    }
    ```

#### '/api/login'
* Type: POST
* Description: Desitnation for log in form
* Request:
    ```javascript
    {
        "username": "ndkivi",
        "password": "qwerty0987!#"
    }
    ```
* Response:
    ```javascript
    {
        "data": "",
        "token": "",
        "error": ""
    }
    ```

### '/api/search'
* Type: POST
* Description: 
* Request:
    ```javascript
    {
        "text": "Laramie, Wyoming"
    }
    ```
* Response:
    ```javascript
    {
        "":""
    }
    ```


### '/api/save'
* Type: POST
* Description:
* Request:
    ```javascript

    ```
* Response:
    ```javascript

    ```

# Node packages

