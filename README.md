# Group_Project_Two

### Concept
The opposite of Travelosity/Expedia/Hotwire: discourage people from travelling by showing them natural disasters that occurred recently at their desired destination

### Requirements (copied from PowerPoint)

* Must use a Node and Express Web Server
* Must be backed by a MySQL Database with a Sequelize ORM
* Must have both GET and POST routes for retrieving and adding new data
* Must be deployed using Heroku (with Data)
* Must utilize at least one new library, package, or technology that we haven’t discussed
    * Crypto and express-session
* Must have a polished frontend / UI
* Must have folder structure that meets MVC Paradigm
* Must meet good quality coding standards (indentation, scoping, naming)
* Must protect API keys in node with environment variables.
        
### Nice To Haves (copied from PowerPoint)
* Utilize Handlebars for Server-Side Templating
    * Not planned.  Not helpful for this project.
* Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
    * In design
* Use an existing public dataset to power the database
    * In design: Dataset will be from the US Government: https://catalog.data.gov/dataset/ncdc-storm-events-database
* Create a migration strategy for sharing data across team members e.g. using a seed/schema.sql file.
    * TBD


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

## HTML paths

#### '/home'
* Type: GET
* Description: Login & Account Registration; all requests get redirected here prior to login 

#### '/search'
* Type: GET
* Description Search page that also displays results

## API paths

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

### '/api/disasters'
* Type: GET
* Description: 
* Request:
    ```javascript
    {
        "text": "Laramie, Wyoming"
    }
    ```
* Response (TBD based on data):
    ```javascript
    {
        "table":"[{'lat':'', 'long':''},{}]"
    }
    ```


### '/api/save'
* Type: POST
* Description:
* Request:
    ```javascript
    {
        "user_id": "1",
        "search_text": "Laramie, Wyoming",
        "avoid_destination": "true"
    }
    ```
* Response:
    ```javascript
    {
        "success": "false"
    }
    ```

# Node packages

* express
* body-parser
* mysql
* sequelize


# Errors

* Use Try and catch
* Write assert functions for testing
* Separate test js file
* Use chai node package
* nightmare for ui testing
