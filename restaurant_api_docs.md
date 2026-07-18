# Cravings API Documentation

This document outlines the API specifications for the modules in **Cravings**. It is divided into shared services (used by all roles: Customers, Riders, and Restaurants) and restaurant-specific modules.

---

## 🔑 Part 1: Shared Modules (All Roles)

APIs in this section start with `/auth` or `/common`. They manage general authentication, security credentials, and shared user info/profiles.

### 📋 Shared API Reference Table

| Component | Method | API Endpoint | Request Body | Response Body | Success Message | Error Status & Messages |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Auth** | `POST` | `/auth/register` | JSON:<br>`{ fullName, email, phone, gender, dob, password, userType }` | JSON:<br>`{ message, data: { _id, fullName, email, phone, gender, dob, photo: { url, publicId }, userType } }` | `"User Registered Successfully"` | **400**: `{"message": "Fill all fields"}` <br> **409**: `{"message": "User already exist with given email"}` |
| **Auth** | `POST` | `/auth/login` | JSON:<br>`{ email, password }` | JSON:<br>`{ message, data: { _id, fullName, email, phone, photo: { url, publicId }, userType } }` *(sets UserToken cookie)* | `"User Successfully Login"` | **400**: `{"message": "Fill all fields"}` <br> **400**: `{"message": "The user doesn't exist"}` <br> **400**: `{"message": "Incorrect Password"}` |
| **Auth** | `GET` | `/auth/logout` | None | JSON:<br>`{ message }` *(clears UserToken cookie)* | `"Logout Successfull"` | **500**: `{"message": "Internal Server Error"}` |
| **Auth** | `POST` | `/auth/send-otp` | JSON:<br>`{ email }` | JSON:<br>`{ message }` | `"OTP send on <email>"` | **400**: `{"message": "Email is required"}` <br> **400**: `{"message": "The user doesn't exist"}` |
| **Auth** | `POST` | `/auth/verify-otp` | JSON:<br>`{ email, otp }` | JSON:<br>`{ message }` *(sets OTP verification cookie)* | `"Otp Verified"` | **400**: `{"message": "Email is required"}` <br> **404**: `{"message": "Email not registered"}` <br> **401**: `{"message": "OTP Expired"}` |
| **Auth** | `POST` | `/auth/reset-password` | JSON:<br>`{ newPassword }` | JSON:<br>`{ message }` | `"Password Changed"` | **401**: `{"message": "Unauthorized"}` (no/invalid OTP token) |
| **Common** *(User Info)* | `PUT` | `/common/edit-profile` | Multipart Form-Data:<br>- `fullName`<br>- `phone`<br>- `email`<br>- `displayPic` *(file, optional)* | JSON:<br>`{ message, data: { _id, fullName, email, phone, photo: { url, publicId }, userType } }` | `"User Updated Sucesfully"` | **400**: `{"message": "All fields required"}` <br> **401**: `{"message": "User Doesn't exist"}` |
| **Common** *(Credentials)*| `PATCH` | `/common/change-password` | JSON:<br>`{ oldPassword, newPassword }` | JSON:<br>`{ message, data: { _id, fullName, email, phone, userType } }` | `"User Password Updated Successfully"` | **400**: `{"message": "All fields Required"}` <br> **401**: `{"message": "Given old password is incorrect"}` |

---

## 🍽️ Part 2: Restaurant Modules

APIs in this section start with `/restaurant` and are specific only to the Restaurant manager role. The profile fields are divided into five distinct components, each using dedicated endpoints.

### 📋 Restaurant API Reference Table

| Component | Method | API Endpoint | Request Body | Response Body | Success Message | Error Status & Messages |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **restaurant info** | `GET` | `/restaurant/info` | None | JSON:<br>`{ message, data: { _id, managerId, restaurantName, description, cuisineTypes, restaurantType, servingHours: { openingTime, closingTime }, contactDetails: { email, phone }, coverImage: { url, publicId }, restaurantImage: [{ url, publicId }], isOpen, status, averageRating } }` | `"Restaurant info fetched successfully"` | **404**: `{"message": "Restaurant profile not found"}` <br> **401**: `{"message": "Unauthorized"}` |
| **restaurant info** | `PUT` | `/restaurant/info` | JSON:<br>`{ restaurantName, description, cuisineTypes: [], restaurantType, servingHours: { openingTime, closingTime }, contactDetails: { email, phone } }` | JSON:<br>`{ message, data: { _id, managerId, restaurantName, description, cuisineTypes, restaurantType, servingHours: { openingTime, closingTime }, contactDetails: { email, phone } } }` | `"Restaurant info updated successfully"` | **400**: `{"message": "Missing required Field: <key>"}` <br> **401**: `{"message": "Unauthorized"}` |
| **cover image** | `PUT` | `/restaurant/cover-image` | Multipart Form-Data:<br>- `coverImage` *(file)* | JSON:<br>`{ message, data: { coverImage: { url, publicId } } }` | `"Cover image updated successfully"` | **400**: `{"message": "Cover image is required"}` <br> **401**: `{"message": "Unauthorized"}` |
| **restaurant images** | `POST` | `/restaurant/images` | Multipart Form-Data:<br>- `restaurantImage` *(files)* | JSON:<br>`{ message, data: { restaurantImage: [{ url, publicId }] } }` | `"Restaurant images uploaded successfully"` | **400**: `{"message": "No images uploaded"}` <br> **401**: `{"message": "Unauthorized"}` |
| **restaurant images** | `DELETE` | `/restaurant/images` | Query Params:<br>- `publicId` *(string)* | JSON:<br>`{ message }` | `"Restaurant image deleted successfully"` | **400**: `{"message": "Public ID is required"}` <br> **401**: `{"message": "Unauthorized"}` |
| **address** | `GET` | `/restaurant/address` | None | JSON:<br>`{ message, data: { address, city, state, pinCode, country, geoLocation: { lat, lon } } }` | `"Restaurant address fetched successfully"` | **404**: `{"message": "Restaurant address not found"}` <br> **401**: `{"message": "Unauthorized"}` |
| **address** | `PUT` | `/restaurant/address` | JSON:<br>`{ address, city, state, pinCode, country, geoLocation: { lat, lon } }` | JSON:<br>`{ message, data: { _id, address, city, state, pinCode, country, geoLocation: { lat, lon } } }` | `"Restaurant address updated successfully"` | **400**: `{"message": "Missing required Field: <key>"}` <br> **401**: `{"message": "Unauthorized"}` |
| **bank and document** | `GET` | `/restaurant/bank-documents` | None | JSON:<br>`{ message, data: { financialDetails: { bankName, accountNumber, ifscCode }, documents: { legalName, companyType, gstCertificate, fssaiCertificate, panCard } } }` | `"Bank and documents fetched successfully"` | **404**: `{"message": "Documents not found"}` <br> **401**: `{"message": "Unauthorized"}` |
| **bank and document** | `PUT` | `/restaurant/bank-documents` | Multipart Form-Data:<br>- `financialDetails[bankName]`<br>- `financialDetails[accountNumber]`<br>- `financialDetails[ifscCode]`<br>- `documents[legalName]`<br>- `documents[companyType]`<br>- `gstCertificate` *(file, optional)*<br>- `fssaiCertificate` *(file, optional)*<br>- `panCard` *(file, optional)* | JSON:<br>`{ message, data: { _id, financialDetails: { bankName, accountNumber, ifscCode }, documents: { legalName, companyType, gstCertificate, fssaiCertificate, panCard } } }` | `"Bank and documents updated successfully"` | **400**: `{"message": "Missing required Field: <key>"}` <br> **401**: `{"message": "Unauthorized"}` |
| **social media** | `GET` | `/restaurant/social-links` | None | JSON:<br>`{ message, data: [ { platform, url } ] }` | `"Social links fetched successfully"` | **404**: `{"message": "Social links not found"}` <br> **401**: `{"message": "Unauthorized"}` |
| **social media** | `PUT` | `/restaurant/social-links` | JSON:<br>`{ socialMediaLinks: [ { platform, url } ] }` | JSON:<br>`{ message, data: { _id, socialMediaLinks: [ { platform, url } ] } }` | `"Social links updated successfully"` | **400**: `{"message": "Missing required Field: <key>"}` <br> **401**: `{"message": "Unauthorized"}` |
| **legal information** | `GET` | `/restaurant/legal-info` | None | JSON:<br>`{ message, data: { status, documents: { legalName, companyType, gstCertificate, fssaiCertificate, panCard } } }` | `"Legal info fetched successfully"` | **404**: `{"message": "Legal info not found"}` <br> **401**: `{"message": "Unauthorized"}` |
| **legal information** | `PUT` | `/restaurant/legal-info` | Multipart Form-Data:<br>- `documents[legalName]`<br>- `documents[companyType]`<br>- `gstCertificate` *(file, optional)*<br>- `fssaiCertificate` *(file, optional)*<br>- `panCard` *(file, optional)* | JSON:<br>`{ message, data: { _id, status, documents: { legalName, companyType, gstCertificate, fssaiCertificate, panCard } } }` | `"Legal info updated successfully"` | **400**: `{"message": "Missing required Field: <key>"}` <br> **401**: `{"message": "Unauthorized"}` |

---

## 🔍 Detailed Shared API Specifications (Part 1)

### 1. Auth

#### 1.1 Register Manager
* **Endpoint:** `/auth/register`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "fullName": "Jane Doe",
    "email": "jane.doe@example.com",
    "phone": 9876543210,
    "gender": "female",
    "dob": "1990-05-15",
    "password": "securePassword123",
    "userType": "restaurant"
  }
  ```
* **Success Response (201 Created):**
  ```json
  {
    "message": "User Registered Successfully",
    "data": {
      "_id": "64b0f19c6d3d9d479101abcd",
      "fullName": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": 9876543210,
      "gender": "female",
      "dob": "1990-05-15T00:00:00.000Z",
      "photo": {
        "url": "https://placehold.co/600x400?text=J",
        "publicId": null
      },
      "userType": "restaurant"
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Fill all fields" }
  ```
* **Error Response (409 Conflict):**
  ```json
  { "message": "User already exist with given email" }
  ```

#### 1.2 Login Manager
* **Endpoint:** `/auth/login`
* **Method:** `POST`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "email": "jane.doe@example.com",
    "password": "securePassword123"
  }
  ```
* **Success Response (200 OK):**
  *(Sets HTTP-only Cookie `UserToken`)*
  ```json
  {
    "message": "User Successfully Login",
    "data": {
      "_id": "64b0f19c6d3d9d479101abcd",
      "fullName": "Jane Doe",
      "email": "jane.doe@example.com",
      "phone": 9876543210,
      "photo": {
        "url": "https://placehold.co/600x400?text=J",
        "publicId": null
      },
      "userType": "restaurant"
    }
  }
  ```
* **Error Response (400 Bad Request - Missing inputs):**
  ```json
  { "message": "Fill all fields" }
  ```
* **Error Response (400 Bad Request - Not Found):**
  ```json
  { "message": "The user doesn't exist" }
  ```
* **Error Response (400 Bad Request - Incorrect Credentials):**
  ```json
  { "message": "Incorrect Password" }
  ```

---

### 2. Common (User Info)

#### 2.1 Update Personal Profile
* **Endpoint:** `/common/edit-profile`
* **Method:** `PUT`
* **Headers:** `Content-Type: multipart/form-data` (Requires cookie authentication)
* **Request Body:**
  * `fullName` (string): "Jane Smith"
  * `phone` (number): 9998887776
  * `email` (string): "jane.doe@example.com"
  * `displayPic` (file, optional): Profile avatar image file
* **Success Response (200 OK):**
  ```json
  {
    "message": "User Updated Sucesfully",
    "data": {
      "_id": "64b0f19c6d3d9d479101abcd",
      "fullName": "Jane Smith",
      "email": "jane.doe@example.com",
      "phone": 9998887776,
      "photo": {
        "url": "https://res.cloudinary.com/.../Cravings/profiles/avatar.jpg",
        "publicId": "Cravings/profiles/avatar_id"
      },
      "userType": "restaurant"
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "All fields required" }
  ```
* **Error Response (401 Unauthorized):**
  ```json
  { "message": "User Doesn't exist" }
  ```

#### 2.2 Change Password
* **Endpoint:** `/common/change-password`
* **Method:** `PATCH`
* **Headers:** `Content-Type: application/json` (Requires cookie authentication)
* **Request Body:**
  ```json
  {
    "oldPassword": "securePassword123",
    "newPassword": "brandNewPassword321"
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "message": "User Password Updated Successfully",
    "data": {
      "_id": "64b0f19c6d3d9d479101abcd",
      "fullName": "Jane Smith",
      "email": "jane.doe@example.com",
      "userType": "restaurant"
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "All fields Required" }
  ```
* **Error Response (401 Unauthorized):**
  ```json
  { "message": "Given old password is incorrect" }
  ```

---

## 🔍 Detailed Restaurant API Specifications (Part 2)

### 1. Restaurant Info

#### 1.1 Get Restaurant Details
* **Endpoint:** `/restaurant/info`
* **Method:** `GET`
* **Headers:** `Content-Type: application/json` (Requires authentication)
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant info fetched successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "managerId": "64b0f19c6d3d9d479101abcd",
      "restaurantName": "Gourmet Garden",
      "description": "Premium bistro offering signature farm-to-table plates.",
      "restaurantType": "both",
      "cuisineTypes": ["Italian", "Continental"],
      "servingHours": {
        "openingTime": "09:00 AM",
        "closingTime": "11:00 PM"
      },
      "contactDetails": {
        "email": "orders@gourmetgarden.com",
        "phone": "9876543219"
      },
      "coverImage": {
        "url": "https://res.cloudinary.com/demo/image/upload/cover.jpg",
        "publicId": "restaurant/cover_id"
      },
      "restaurantImage": [
        {
          "url": "https://res.cloudinary.com/demo/image/upload/dining.jpg",
          "publicId": "restaurant/dining_id"
        }
      ],
      "isOpen": true,
      "averageRating": 4.5
    }
  }
  ```

#### 1.2 Update Restaurant Info
* **Endpoint:** `/restaurant/info`
* **Method:** `PUT`
* **Headers:** `Content-Type: application/json` (Requires authentication)
* **Request Body:**
  ```json
  {
    "restaurantName": "Gourmet Garden",
    "description": "Premium bistro offering signature farm-to-table plates.",
    "restaurantType": "both",
    "cuisineTypes": ["Italian", "Continental"],
    "servingHours": {
      "openingTime": "09:00 AM",
      "closingTime": "11:00 PM"
    },
    "contactDetails": {
      "email": "orders@gourmetgarden.com",
      "phone": "9876543219"
    }
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant info updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "managerId": "64b0f19c6d3d9d479101abcd",
      "restaurantName": "Gourmet Garden",
      "description": "Premium bistro offering signature farm-to-table plates.",
      "restaurantType": "both",
      "cuisineTypes": ["Italian", "Continental"],
      "servingHours": {
        "openingTime": "09:00 AM",
        "closingTime": "11:00 PM"
      },
      "contactDetails": {
        "email": "orders@gourmetgarden.com",
        "phone": "9876543219"
      }
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Missing required Field: restaurantName" }
  ```

#### 1.3 Update Cover Image
* **Endpoint:** `/restaurant/cover-image`
* **Method:** `PUT`
* **Headers:** `Content-Type: multipart/form-data` (Requires authentication)
* **Request Body:**
  * `coverImage` (file): Cover image file to upload.
* **Success Response (200 OK):**
  ```json
  {
    "message": "Cover image updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "coverImage": {
        "url": "https://res.cloudinary.com/demo/image/upload/cover.jpg",
        "publicId": "restaurant/cover_id"
      }
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Cover image is required" }
  ```

#### 1.4 Add Restaurant Gallery Images
* **Endpoint:** `/restaurant/images`
* **Method:** `POST`
* **Headers:** `Content-Type: multipart/form-data` (Requires authentication)
* **Request Body:**
  * `restaurantImage` (files): Multiple restaurant image files to upload and append.
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant images uploaded successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "restaurantImage": [
        {
          "url": "https://res.cloudinary.com/demo/image/upload/dining.jpg",
          "publicId": "restaurant/dining_id"
        },
        {
          "url": "https://res.cloudinary.com/demo/image/upload/kitchen.jpg",
          "publicId": "restaurant/kitchen_id"
        }
      ]
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "No images uploaded" }
  ```

#### 1.5 Delete Restaurant Gallery Image
* **Endpoint:** `/restaurant/images`
* **Method:** `DELETE`
* **Headers:** `Content-Type: application/json` (Requires authentication)
* **Query Parameters:**
  * `publicId` (string, required): The public ID of the Cloudinary image to delete.
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant image deleted successfully"
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Public ID is required" }
  ```

---

### 2. Address

#### 2.1 Get Restaurant Address & Geolocation
* **Endpoint:** `/restaurant/address`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant address fetched successfully",
    "data": {
      "address": "123 Foodie Avenue, Suite 10",
      "city": "Manhattan",
      "state": "New York",
      "pinCode": "10001",
      "country": "USA",
      "geoLocation": {
        "lat": "40.7128",
        "lon": "-74.0060"
      }
    }
  }
  ```

#### 2.2 Update Restaurant Address & Geolocation
* **Endpoint:** `/restaurant/address`
* **Method:** `PUT`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "address": "123 Foodie Avenue, Suite 10",
    "city": "Manhattan",
    "state": "New York",
    "pinCode": "10001",
    "country": "USA",
    "geoLocation": {
      "lat": "40.7128",
      "lon": "-74.0060"
    }
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "message": "Restaurant address updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "address": "123 Foodie Avenue, Suite 10",
      "city": "Manhattan",
      "state": "New York",
      "pinCode": "10001",
      "country": "USA",
      "geoLocation": {
        "lat": "40.7128",
        "lon": "-74.0060"
      }
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Missing required Field: city" }
  ```

---

### 3. Bank and Document

#### 3.1 Get Bank and Documents Info
* **Endpoint:** `/restaurant/bank-documents`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "message": "Bank and documents fetched successfully",
    "data": {
      "financialDetails": {
        "bankName": "Global Bank",
        "accountNumber": "987654321098",
        "ifscCode": "GLBB0001234"
      },
      "documents": {
        "legalName": "Gourmet Garden LLC",
        "companyType": "LLC",
        "gstCertificate": "https://res.cloudinary.com/.../docs/gst.pdf",
        "fssaiCertificate": "https://res.cloudinary.com/.../docs/fssai.pdf",
        "panCard": "https://res.cloudinary.com/.../docs/pan.jpg"
      }
    }
  }
  ```

#### 3.2 Update Bank Details and Documents Info
* **Endpoint:** `/restaurant/bank-documents`
* **Method:** `PUT`
* **Headers:** `Content-Type: multipart/form-data`
* **Request Body:**
  * `financialDetails[bankName]` (string)
  * `financialDetails[accountNumber]` (string)
  * `financialDetails[ifscCode]` (string)
  * `gstCertificate` (file, optional)
  * `fssaiCertificate` (file, optional)
  * `panCard` (file, optional)
* **Success Response (200 OK):**
  ```json
  {
    "message": "Bank and documents updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "financialDetails": {
        "bankName": "Global Bank",
        "accountNumber": "987654321098",
        "ifscCode": "GLBB0001234"
      }
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Missing required Field: financialDetails.bankName" }
  ```

---

### 4. Social Media

#### 4.1 Get Social Links
* **Endpoint:** `/restaurant/social-links`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "message": "Social links fetched successfully",
    "data": [
      { "platform": "Instagram", "url": "https://instagram.com/gourmetgarden" },
      { "platform": "Facebook", "url": "https://facebook.com/gourmetgarden" }
    ]
  }
  ```

#### 4.2 Update Social Links
* **Endpoint:** `/restaurant/social-links`
* **Method:** `PUT`
* **Headers:** `Content-Type: application/json`
* **Request Body:**
  ```json
  {
    "socialMediaLinks": [
      {
        "platform": "Instagram",
        "url": "https://instagram.com/gourmetgarden"
      },
      {
        "platform": "Facebook",
        "url": "https://facebook.com/gourmetgarden"
      }
    ]
  }
  ```
* **Success Response (200 OK):**
  ```json
  {
    "message": "Social links updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "socialMediaLinks": [
        {
          "platform": "Instagram",
          "url": "https://instagram.com/gourmetgarden"
        },
        {
          "platform": "Facebook",
          "url": "https://facebook.com/gourmetgarden"
        }
      ]
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Missing required Field: socialMediaLinks" }
  ```

---

### 5. Legal Information

#### 5.1 Get Legal Compliance Details
* **Endpoint:** `/restaurant/legal-info`
* **Method:** `GET`
* **Success Response (200 OK):**
  ```json
  {
    "message": "Legal info fetched successfully",
    "data": {
      "status": "active",
      "documents": {
        "legalName": "Gourmet Garden LLC",
        "companyType": "LLC",
        "gstCertificate": "https://res.cloudinary.com/.../docs/gst.pdf",
        "fssaiCertificate": "https://res.cloudinary.com/.../docs/fssai.pdf",
        "panCard": "https://res.cloudinary.com/.../docs/pan.jpg"
      }
    }
  }
  ```

#### 5.2 Update Legal Compliance Details
* **Endpoint:** `/restaurant/legal-info`
* **Method:** `PUT`
* **Headers:** `Content-Type: multipart/form-data`
* **Request Body:**
  * `documents[legalName]` (string)
  * `documents[companyType]` (string)
  * `gstCertificate` (file, optional)
  * `fssaiCertificate` (file, optional)
  * `panCard` (file, optional)
* **Success Response (200 OK):**
  ```json
  {
    "message": "Legal info updated successfully",
    "data": {
      "_id": "64b0f7896d3d9d479101ffef",
      "documents": {
        "legalName": "Gourmet Garden LLC",
        "companyType": "LLC"
      },
      "status": "inactive"
    }
  }
  ```
* **Error Response (400 Bad Request):**
  ```json
  { "message": "Missing required Field: documents.legalName" }
  ```
