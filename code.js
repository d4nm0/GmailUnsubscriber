function unsubscribeEmails() {
  const searchQuery = 'unsubscribe OR désabonner OR désabonnement OR désinscrire OR "annuler votre abonnement" OR "plus recevoir nos communications" OR DESINSCRIRE OR "plus recevoir nos emails" OR "retiré de notre liste de diffusion" OR "plus recevoir de communications" OR "plus recevoir de messages électroniques" OR "inscrit à la liste de diffusion" OR Désinscription OR désinscrivez-vous OR "souhaitez plus recevoir d\'informations" OR "gérer vos préférences de communication" OR "leave mailing list" OR "Gérer les newsletters" OR "souhaitez plus recevoir nos mails" OR "manage your email preferences" OR "êtes inscrit(e) à la newsletter" OR "your email preferences" OR "plus recevoir ces emails" OR "modifier vos préférences d\'e-mail" OR "veux plus recevoir d\'emails" OR "désabonnez-vous" OR "Update preferences" OR "Ne plus recevoir la newsletter" OR "plus recevoir les offres" OR "plus recevoir d\'email"';
  const threads = GmailApp.search(searchQuery, 0, 500); // Limite à 500 conversations par exécution

  const sheet = SpreadsheetApp.openById('SHEET_ID').getActiveSheet();
  sheet.appendRow(['Sujet', 'Date', 'Lien de désabonnement']);

  for (let i = 0; i < threads.length; i++) {
    const thread = threads[i];
    const messages = thread.getMessages();
    const firstMessage = messages[0];
    const receivedDate = firstMessage.getDate();
    
    const day = receivedDate.getDate();
    const month = receivedDate.getMonth() + 1;
    const year = receivedDate.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const body = firstMessage.getBody();
    const unsubscribeLinkRegex = /https?:\/\/[^\s"]+(unsubscribe|désabonner|optout|preferences|leave)[^\s"]*/gi;
    let unsubscribeLink = body.match(unsubscribeLinkRegex);

    if (unsubscribeLink) {
      unsubscribeLink = unsubscribeLink[0].split('"')[0];
      sheet.appendRow([thread.getFirstMessageSubject(), formattedDate, unsubscribeLink]);
      console.log(`Lien de désabonnement trouvé : ${unsubscribeLink}`);
    }

    thread.moveToTrash();
    console.log(i + " Email supprimé : " + thread.getFirstMessageSubject() + " | Reçu le : " + formattedDate);
  }

  console.log("Script terminé, emails et liens de désabonnement enregistrés !");
}
