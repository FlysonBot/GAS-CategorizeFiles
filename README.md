# GAS-CategorizeFiles
Move files in the root or Inbox folder to another user defined folder based on its file name.

# What do I need to get started

All you need is a browser and an Google account in order to use this script to clean your Gmail inbox. It would work on personal account as well.

# What is this for?

Are you tired of new files kept showing up at the root of your Google Drive? Are you tired of having to manually place your files into a specific folder? This is for you.

The [Move Root Files to Inbox.gs](https://github.com/FlysonBot/GAS-CategorizeFiles/blob/main/Move Root Files to Inbox.gs) contain a script to move all the files in the root folder to a specific folder of your choice. You can set a trigger to run this every hour to keep your drive clean.

The [Categorize Files.gs](https://github.com/FlysonBot/GAS-CategorizeFiles/blob/main/Categorize Files.gs) contain a script to move/categorize all the flies in the root or another folder to other folders. For example, you can tell it to move anything whose filename start with "Classwork_" to a folder name Classwork.

# How to use?

1. Open [Google Apps Script homepage](https://script.google.com/home)

2. Create a new project

3. Go to the project settings and turn on the option to show 'appsscript.json'

4. Copy and paste the content from [appsscript.json](https://github.com/FlysonBot/GAS-CategorizeFiles/blob/main/appsscript.json) to the one in your project and save.

5. Copy and paste the code from [Move Root Files to Inbox.gs](https://github.com/FlysonBot/GAS-CategorizeFiles/blob/main/Move Root Files to Inbox.gs) and [Categorize Files.gs](https://github.com/FlysonBot/GAS-CategorizeFiles/blob/main/Categorize Files.gs) to your project and save.

6. Setup the `Categorize Files.gs` following the instruction inside the file. If you wish to automatically move stuff from root to a specific folder, setup the other `.gs` file as well. 

7. Run the script once to make sure it works. Give permission when it ask for it.

8. To automate, go to Trigger on the left and set up a trigger to run once the `moveFilesToInboxMain` (optoinal) and `categorizingFilesMain` periodically.

# Issues, Bugs, or Suggestions

Open up an issue [here](https://github.com/FlysonBot/GAS-CategorizeFiles/issues)
