# Dynamic Post Page with OG Image Generation

## **Objective**

The goal of this project is to create a dynamic post page using React that generates an Open Graph (og:image) based on the content of the post. The og:image is used for social media previews, ensuring that your post is displayed attractively when shared.

## **Features**

### 1. Post Page

- **Title Field:** Input field for the post title.
- **Content Field:** Text area for the main content of the post.
- **Image Upload:** Option to upload an image to be included in the post.
- **Background Color:** Customize the background color of the post.
- **Border Color:** Customize the border color of the post.
- **Text Color:** Customize the text color of the post.
- **Font Family:** Select from different font families to style the text.
- **Date Selector:** Choose a date for the post.

### 2. OG Image Generation

- **Dynamic Image Creation:** Generates an Open Graph image (1200x630 pixels) based on the post content.
- **Content Inclusion:** The image includes the post title, a snippet of the content, and the uploaded image if available.
- **Meta Tag Integration:** Automatically updates the og:image meta tag in the HTML to include the URL of the generated image.

### 3. Integration

- **Meta Tag Update:** Ensures the og:image meta tag is correctly set for social media platforms to recognize.
- **Image Accessibility:** The generated image URL is accessible for web crawlers and social media platforms.

### 4. Styling

- **Visual Appeal:** The OG image is styled to be visually appealing and readable.
- **Branding Elements:** Includes branding elements such as the logo and color scheme to maintain consistency.

### 5. Performance

- **Optimized Generation:** The image generation process is optimized for speed to ensure quick updates and user interaction.

## **Logo**

The project features a custom logo designed to showcase the creator's initials, "BD" for Bhaskar Das. This logo is incorporated into the OG image to personalize and brand the post. The logo is placed prominently to ensure it stands out and reinforces the creator's identity.


## **Usage**

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/bhaskar552/Image-Generator.git
    cd Image-Generator
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npm start
    ```

    Open your browser and navigate to `http://localhost:3000` to view and interact with the post page.

4. **Create a Post:**

    - Enter a title and content.
    - Upload an optional image.
    - Customize the post appearance using color and font options.
    - Select a date for the post.

5. **Generate OG Image:**

    - Click the "Generate OG Image" button to create the image.
    - The OG image will be displayed below the post preview section.
    - You can download the generated image using the "Download Image" button.

## **Deliverables**

1. **Functional Post Page:** A working post page that allows for title, content, image upload, and customization.
2. **OG Image Generation:** The system generates and displays an OG image based on the post content.
3. **Source Code:** Complete source code available in the repository.
4. **Documentation:** This README file explains the features and usage of the system.

## **Contributing**

Feel free to open issues or submit pull requests if you have any improvements or fixes!


