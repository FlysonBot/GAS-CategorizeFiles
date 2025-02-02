// The scan_folder is the folder where the script pull files to categorize.
// Remove the "//" before one of the following to set the scan folder.

// Notice: The script will no look at the subfolders.

//const scan_folder = DriveApp.getRootFolder(); // Scan the root folder
//const scan_folder = DriveApp.getFolderById("1s4rlgOcJLR9PnWckV6Y0ItYFXC3knlv5"); // Scan a custom folder (such as an Inbox folder). ID is the random string at the end of the URL of a folder.


// Here is where you tell the script what you want to put where
// Please adjust it to your need
const folderId = {
  "Example-1": "1gv0x14ncUljJRyY4rZITrC5ozkbclcVi",
  "Example-2": "1gv0x14ncUljJRyY4rZITrC5ozkbclcVi"
}
const separator = "_"; // The character that separate the label from the file name
// In the example above, a file name "Example-1_I am a File.pdf" will be move to the folder with ID 1gv0x14ncUljJRyY4rZITrC5ozkbclcVi.

// This is optional. If used, a super category will be used when category is not found.
// For example, when no folder for "Lable-A" is found, but there is a folder for "Lable" it use it instead.
const super_separator = "-";


// Do not touch the following

function categorizingFilesMain() {
  var files = scan_folder.getFiles();

  while(files.hasNext()) {
    file = files.next()
    console.log("Processing file " + file.getName())
    categorizeFile(file)
  }
}

function categorizeFile(file) {
  const fileName = file.getName();
  const slideLocation = fileName.indexOf(separator);
  const slideLocation2 = fileName.indexOf(super_separator,3);
  if (slideLocation === -1) {return}
  const category = fileName.slice(0,slideLocation);
  const superCategory = fileName.slice(0,slideLocation2);
  if (category in folderId) {
    try{
      file.moveTo(DriveApp.getFolderById(folderId[category]))
      console.log("Moved file " + fileName + " to folder " + category + ".")
    } catch(e) {
      console.log("An error occured when moving file " + fileName + " to folder " + category + ".\nError message: " + e)
    }
  } else if (superCategory in folderId) {
    try{
      file.moveTo(DriveApp.getFolderById(folderId[superCategory]))
      console.log("Moved file " + fileName + " to folder " + superCategory + ".")
    } catch(e) {
      console.log("An error occured when moving file " + fileName + " to folder " + superCategory + ".\nError message: " + e)
    }
  }
  return
}
