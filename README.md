# CommunityVision

## Description  
A place where granting organizations can give engaged community members authorship over the design briefs for new public spaces in their communities.  
  
## User Story  
##### Granting Users  
AS a city planning department  
I WANT a place to collect community ideas and facilitate a participatory design process  
SO THAT public space design and their guiding design briefs are driven by the visions of the community.  
  
## App Functionality  
GIVEN a single-page application for collaborative public space design  
AS an unloggedin users  
WHEN I load the app  
THEN I am presented with a page containing a list of preview cards for active grant opportunities  
WHEN I type a place name into the search bar  
THEN I am presented with all the active grant opportunities in that region  
WHEN I click on a grant opportunity  
THEN in the top section, I am presented with a page for the grant with its name, description, background, guidelines, budget, photos  
WHEN I collapse the first section or scroll down,  
THEN I am presented with the second section containing a list of preview cards for all of the proposals that have been submitted for the brief  
WHEN I click on design brief card  
THEN I am presented with a page containing the grant opportunity name and link back to the page, the design brief name, and a number of sections including background,  description, list of features, and supporting media.  
  
GRANTER  
WHEN I load the app  
THEN I am presented with a list of active grant opportunities  
WHEN I click on the `Add New Grant Opportunity`  
THEN I am redirected to the login page if not logged in  
WHEN I am logged in  
THEN I am directed to the `New Grant Opportunity` input  
WHEN I submit the form with a name, description, background, guidelines, budget, and supportive media  
THEN I am redirected to my new Grant Opportunity page  
  
COMMUNITY MEMBER  
WHEN I click on a Grant Opportunity  
THEN I am presented with its info page  
WHEN I click on the `write a design brief` button  
THEN I am promoted to login if I am not logged in  
WHEN I am logged in  
THEN I am taken to the `New Design Brief` input for  
WHEN I add a name, description, context, acceptance criteria, and supporting media  
THEN I am taken to my new `Design Brief` page  
  
CONTRIBUTION  
GIVEN I am viewing a user-submitted design brief that i want to contribute to  
WHEN , as a unloggedin user, I click on the "contribute" button next to a content element on the page  
THEN I am taken to the login page  
WHEN I create an account  
THEN I am taken back to the design brief page and the element I wanted to contribute to  
WHEN I submit text content in the contribute field and click `submit`  
THEN I see my contribution with my name listed in the "Suggestions" section near the element  
  
TRANSLATION  
WHEN I want to view the page in my native language other than English  
THEN I can select it from a dropdown list of possible languages

#### Market Research
- [comprehensive list of civic engagement apps](https://directory.civictech.guide/listing-category/engagement-tech)
- https://pol.is/home
	- opinion polling and consensus build of large groups of people
- https://urbanpinion.com/
	- get the opinon of citizens related to development and urban planning
- https://civicvoices.app/
	- engage with law makers about laws that are currently being written
- https://www.digital-democracy.org/mapeo/
	- mapping of indigenous land in low-connected areas
- 

### Mongo Models Outline
- Grants
	- belong to one user
	- has many briefs
- Briefs
	- belongs to one user
	- belongs to one grant
	- has many suggestions
- Suggestions
	- belongs to one user
	- belongs to one brief
- Users
	- has many grants
	- has many briefs


#### Tech
**Packages:**
- [rich text editor for submitting links in a form](https://github.com/facebook/draft-js)
- [react-intl - react translation (but uses typesript??)](https://www.npmjs.com/package/react-intl)
- [free google translate fork not made specifically for react](https://www.npmjs.com/package/google-translate-api-x)
**Mapping package, if we have time:**
- [mapbox-gl-js for mapping the project site](https://github.com/mapbox/mapbox-gl-js)
	- [example](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/)
- [polydrawing with mapbox](https://github.com/amaurym/react-mapbox-gl-draw)
	- [example](https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-draw/)
**Component Library:**
- [Matierialize React Component Library](https://mui.com/)
**Other useful Tools**
- [hero icons](https://heroicons.com/)
- [fontsource](https://fontsource.org/fonts)


## Features
##### Grant Opportunity Creators
- Add Grant Opportunity form
	- Project Name
	- body (rich text editor)
	- photos uploader
	- map picker
	- agency/ project logo upload
	  
##### Design Brief Creators
- Create New Design Brief form
	- Proposal Name
	- Body text (rich text editor)
	- Photos
	- Either point marker or drawn polygon shape to indicate project area
	- tags (community gardens, housing, playground)
- public proposal page
- "suggest" option to allow other users to provide feedback
- upvote button for each proposal

##### Translation
- Users can choose their languge of choice
- Proposals and suggestions will display a note about orgininal post language if it was translated


#### Example Real-world Use for App
- [Dr. Jose Rizalt Bridge Park Redesign](https://seattle.gov/parksnew/about-us/projects/dr-jose-rizal-park-renovation)
	- [research pdf](https://seattle.gov/documents/Departments/ParksAndRecreation/Projects/JoseRizal/ENVIR480_Jose%20Rizal%20Redesign%20Booklet%20-%20Appendix%202-reduced%20size.pdf)
	- [call for design](https://seattle.gov/documents/Departments/ParksAndRecreation/Projects/JoseRizal/20221010_SPR_Design_Opportunity_doc_1.pdf)
