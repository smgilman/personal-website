# How to Upload Grades.

## Set-up
    
- *If you don’t have access to the “csc216-tools” repo, message Dr. Heckman about getting access*

    - You can either clone the repository to your computer or just download the repository directly from GitHub

        - I have it cloned only because I pushed changes to the configs folder to make your life a tad easier

- Open your PTF-workspace in Eclipse and make sure you don’t have any projects open in this workspace

- Select Import projects… → Maven → Existing Maven Projects

- Browse to the FeedbackFileManager folder for “Root Directory” you should see a /pom.xml option in the Projects area

- Check this entry, and select Finish

## FeedbackFileManager contents
    
- src/

    - **You shouldn’t need to edit any files other than src/ui/FeedbackFileManagerUI.java**

    - Essentially, all the files are working together to parse an excel spreadsheet and compose each row into a file that students can reference when submitting regrade requests

- configs/

    - This folder has all the config files for generating both lab and project grades

    - You’ll be editing these files depending on what assignment you’re uploading grades for

- input/

    - You’ll want to create at least one excel sheet (I have two, one for lab input and the other for project input)

        - In these sheets, you can add as many sheets as you’d like (I have two, one titled “grades” and the other titled “temp” in my lab grades spreadsheet), but you **MUST** have a sheet titled “grades”

        - The temp sheet I have is for holding lab grades that may have a different “MAX Points” value than the files I am currently generating

- output/

    - You won’t have an output folder when you first import the project, but this will be where the files are generated

- everything else is irrelevant to you, but feel free to browse the contents lol


## Lab Grading
    
- Go to the CSC 217 Moodle and navigate to the lab you’ll be uploading grades for

    - ex. CSC 217 Moodle → Lab 7: ArrayLists → Lab 7 Grades → View All Submissions → Grading action = Download grading worksheet

        - Depending on your computer, you may have to refresh the page and redownload the gradesheet a number of times before it actually downloads

- Copy the contents from the downloaded excel file and paste it into sheets “MOODLE_INFO” and “MOODLE_INFO_601” on the lab gradesheet in the google drive

- Do this in “MOODLE_INFO” and “MOODLE_INFO_601” sheets :

    - In column R, change the the formula to the following and drag this down to the last populated row in this sheet :

        - `=IF(ISERROR(P2),"",P2 & " " & O2 & "_*" & M2 & "_*" & $S$1 & "_" & $T$1)`

    - In column E, change the the formula to the following and drag this down to the last populated row in this sheet :

        - `=IF(J2=601,"",IFERROR(INDEX(IndividualGrades!AN:AN,MATCH(N2,IndividualGrades!B:B,0)),""))`

        - *You may need to change the AN:AN from this formula to match the IndividualGrades sheet “**Percentage**” column*

- Once these formulas are changed, copy the contents from “MOODLE_INFO” sheet (columns A-I) into your downloaded grade sheet from Moodle

- Copy the contents from the IndividualGrades sheet into your lab input excel file

    - *I recommend deleting the empty column (column C) from this excel file, but do whatever is easiest for you*

    - Navigate to the “MAX Points” column and sort these in descending order (or ascending, doesn’t necessarily matter atp, but for the sake of this guide, I’ll be using descending order)

        - Cut and paste all entries that have a value less than 100 into another sheet

            - Your grades sheet should look something like this :

                ![Grades sheet](/grades-sheet.png)

            - Your other sheet should look something like this :

                ![Temp sheet](/temp-sheet.png)
                    

- Repeat the following steps for configs/LabX.md, configs/LabX_DE_T.md, and configs/LabX_DE.md

    - Make any needed changes by comparing what’s on the config file to what you have in your lab input grades sheet

        - I’ve updated the config files so you shouldn’t *need* to make any adjustments, but double check because I may have missed something

    - Change line 18 in src/FeedbackFileManagerUI.java file to point to your config file and input sheet

        - ex. `FeedbackFileManager manager1 = new FeedbackFileManager("configs/Lab7.md", "input/lab_input.xlsx");`

    - Run FeedbackFileManagerUI.java

        - If you run into errors, refer to the debug section below for common error messages!

        - I like to double check assignments to make sure everything was converted correctly

- After verifying feedback files, go one directory out (\FeedbackFileManager\output\PDF\Lab X) and compress the Lab X folder into a ZIP folder

    ![Compressed Lab X folder](/file-explorer.png)
        
## Project Grading
    
- to come


## Uploading Lab Grades
    
- **You should already have the downloaded grade sheet from the Moodle assignment you’re uploading grades for**
- Navigate to Moodle Assignment → View all submissions → Grading action → “Upload grading worksheet”

    - Upload the downloaded grade sheet and select “Allow updating records that have been modified more recently in Moodle than in the spreadsheet.”

- Navigate to Grading action → “Upload multiple feedback files in a zip”

    - Make sure the `\output\PDF\Lab X\Lab X` is selected and click “Import feedback file(s)”

- Dr. Heckman may have the assignment hidden on Moodle — if this is true, navigate to Settings → “Common module settings”, change Availability to “Show on course page”, and select “Save and display”

- Posting on the class discussion board :

    - For the first few labs, I post an announcement that looks something like this
                
        > Hey all!
        > 
        > 
        > You should have just received a notification that you have been provided feedback on your `Lab X` assignment.
        > 
        > Your grade will be posted in Moodle, and attached to that should be a PDF feedback file with a breakdown of your grade (**this is how it will be for almost all your lab and project assignments**). In this file, near the top you will see a link to the Regrade Request form as well as the unity ID of the PTF who graded your submission.
        > 
        > -------------------------------------------------------------------------------------------------------
        > 
        > **Should you find a mistake in the grading of your assignment, fill out the regrade request form and make sure to fill in the appropriate unity ID of your grader from the Feedback File**.
        > 
        > **The person / unity id mentioned in the Moodle announcement (i.e. me (`<Your name>`)) is not necessarily the same person who graded your assignment.**
        > 
        > -------------------------------------------------------------------------------------------------------
        > 
        > The feedback file will also contain a breakdown of how you scored against the rubric as well as any comments left by the PTF grader. I highly suggest you review these comments before submitting any regrade requests.
        > 
        > Feel free to follow up on this note if you have any questions about how to view your grade and the associated feedback.
        > 

    - For later labs, my message tends to look something like this
        
        > Hey all!
        > 
        > 
        > I just released your grades for `lab X`.
        > 
        > -------------------------------------------------------------------------------------------------------
        > 
        > **Should you find a mistake in the grading of your assignment, fill out the regrade request form and make sure to fill in the appropriate unity ID of your grader from the Feedback File**.
        > 
        > **The person / unity id mentioned in the Moodle announcement (i.e. me (`<Your name>`)) is not necessarily the same person who graded your assignment.**
        > 
        > -------------------------------------------------------------------------------------------------------
        > 
        > Happy coding!
        > 

- CONGRATS! YOU JUST UPLOADED LAB GRADES! WOOOOOOOOOOOOOOO! 🥳 🎉

## Uploading Project Grades

- to come


## Common Error Messages
    
- to come