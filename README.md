Gmail Unsubscribe and Clean Script
This script allows you to automatically clean up your Gmail inbox by moving emails containing specific unsubscribe-related keywords to the trash. After running the script, you can review and permanently delete these emails from your Gmail trash.

Installation Instructions
Go to Google Apps Script:
Open Google Apps Script.

Create a New Project:
Click on New project.

Add the Code:
Copy and paste the following code into the editor:

javascript
Copier le code
function unsubscribeEmails() {
  const searchQuery = 'unsubscribe OR désabonner OR désabonnement OR désinscrire OR "annuler votre abonnement" OR "plus recevoir nos communications" OR DESINSCRIRE OR "plus recevoir nos emails" OR "retiré de notre liste de diffusion" OR "plus recevoir de communications" OR "plus recevoir de messages électroniques" OR "inscrit à la liste de diffusion" OR Désinscription OR désinscrivez-vous OR "souhaitez plus recevoir d\'informations" OR "gérer vos préférences de communication" OR "leave mailing list" OR "Gérer les newsletters" OR "souhaitez plus recevoir nos mails" OR "manage your email preferences" OR "êtes inscrit(e) à la newsletter" OR "your email preferences" OR "plus recevoir ces emails" OR "modifier vos préférences d\'e-mail" OR "veux plus recevoir d\'emails" OR "désabonnez-vous" OR "Update preferences" OR "Ne plus recevoir la newsletter" OR "plus recevoir les offres" OR "plus recevoir d\'email"';
  const threads = GmailApp.search(searchQuery, 0, 500); // Limits to 500 conversations per execution
  
  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const messages = thread.getMessages();
    const firstMessage = messages[0]; // Gets the first message in the thread
    const receivedDate = firstMessage.getDate();

    // Format the date to display only day, month, and year
    const day = receivedDate.getDate();
    const month = receivedDate.getMonth() + 1; // Months start at 0, so we add 1
    const year = receivedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    
    // Move the thread to Trash
    thread.moveToTrash();
    console.log(i + " Email deleted: " + thread.getFirstMessageSubject() + " | Received on: " + formattedDate);
  }
  
  console.log("Script finished, emails moved to trash!");
}
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
