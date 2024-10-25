Gmail Unsubscribe and Clean Script
This script allows you to automatically clean up your Gmail inbox by moving emails containing specific unsubscribe-related keywords to the trash. After running the script, you can review and permanently delete these emails from your Gmail trash.

Installation Instructions
Go to Google Apps Script:
Open Google Apps Script.

Create a New Project:
Click on New project.

Add the Code:
Copy and paste the following code into the editor:


Authorize the Script:
When running the script for the first time, you will need to authorize it to access your Gmail account. Accept the requested permissions.

Run the Script:
From the menu, select the unsubscribeEmails function, then click Run.

How the Script Works
The script searches your Gmail inbox for emails containing specific unsubscribe-related keywords (e.g., "unsubscribe," "désinscription," etc.). It moves any matching email threads to the Trash. You’ll need to empty the Gmail trash manually to complete the cleanup process.

Important Notes
Empty the Gmail Trash:
After running the script, go to your Gmail Trash and delete the emails permanently.

Thread Limit:
The script processes up to 500 email threads per execution. For larger inboxes, you may need to run the script multiple time
