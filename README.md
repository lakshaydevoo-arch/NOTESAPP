# NotesApp


NotesApp is a simple, client-side web application for creating and managing personal notes. It uses the browser's `localStorage` to persist your notes, so they are available even after you close the tab.

## Features

-   **Create Notes:** Add new notes with a title, description, and a specific category.
-   **Categorize:** Assign categories to your notes, such as Emergency, Important, Urgent, or No Rush.
-   **Persistent Storage:** Notes are saved in your browser's `localStorage`, ensuring they are not lost between sessions.
-   **Simple Interface:** A clean and intuitive user interface for viewing and adding notes.
-   **Responsive Layout:** The notes are displayed in a responsive grid that adapts to different screen sizes.

## How to Use

To run this application, simply open the `idx.html` file in any modern web browser.

1.  **Viewing Notes:** The main page (`idx.html`) displays all your saved notes.
2.  **Adding a Note:**
    -   Click the `+` button on the bottom right of the main page.
    -   This will take you to the "New Note" form.
    -   Enter a title and a description for your note.
    -   Select a category.
    -   Click the "Create Note" button.
    -   You will be redirected back to the main page, and your new note will be displayed.

## Technologies Used

-   HTML5
-   CSS3
-   JavaScript

## File Structure

-   `idx.html`: The main entry point of the application, which displays the list of all notes.
-   `newnote.html`: The page containing the form to create a new note.
-   `script.js`: Handles all the application logic, including creating notes, saving them to `localStorage`, and rendering them on the page.
-   `style.css`: Provides the styling and layout for the application.
