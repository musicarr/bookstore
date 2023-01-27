// schemas are basically objects
export default {
   // The identifier for this document type used in the api's
  name: 'book',

  // This is the display name for the type
  title: 'Books',

  // Schema type of Document
  type: 'document',

  fields: [
    {
      name: 'name',
      title: 'Book Name',
      type: 'string',
      description: 'Name of the book',
    },
    {
	  name: 'author',
	  title: 'Author Name',
	  type: 'string',
	  description: 'Name of the author',
	},
	{
	  name: 'releaseDate',
	  title: 'Release Date',
	  type: 'date',
	  options: {
		dateFormat: 'YYYY-MM-DD',
		calendarTodayLabel: 'Today',
	  },
	  description: 'Release Date of the book',
	},
	{
	  name: 'category',
	  title: 'Book Category',
	  type: 'array',
	  description: 'Category of the Book',
	  of: [
		{
		  type: 'reference',
		  to: [
			{
			  type: 'category',
			},
		  ],
		},
	  ],
	},
  ]
}