# Multi Langual support

## Step 1 : Add your language under lang folder
## Step 2 : map data on component  
Example 
## {window.site_text(`pages.ApiCall.view_button`)}


# Api call

## import { get , post, put, del } from "***/helper/apiHelper";
## Example:    const response = await get("/users");


# Mock api 

## Add mock json response under apiConfig/Mock folder
## map mock file to specific endpoint on configureMockData.js
## Example:  
{
    url: "request url without base url IE: /users/2",
    method: "GET/POST/PUT/DELETE",
    mockFile: "name_of_your_mock_file.json",
}