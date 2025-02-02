// Run this script only if you want to move files in the root of the
// drive to a separate folder, such as an Inbox folder.

// This is the ID of the folder you want to move files into.
// The ID is the random string at the end of the URL of a Google Drive folder.
const inboxFolder = DriveApp.getFolderById("1s4rlgOcJLR9PnWckV6Y0ItYFXC3knlv5");


// Do not touch the following

function moveFilesToInboxMain() {
  const rootFolder = DriveApp.getRootFolder();
  moveFilesToInbox(rootFolder.getFiles());
}

function moveFilesToInbox(files) {
  while (files.hasNext()) {
    files.next().moveTo(inboxFolder);
  }
  return
}
