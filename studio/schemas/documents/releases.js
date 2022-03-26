export default {
    name: 'releases',
    type: 'document',
    title: 'Releases',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Release Title',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug',
        options: {
            source: 'title',
            maxLength: 96
        }
      },
      {
        title: 'Release Date',
        name: 'releaseDate',
        type: 'date',
      },
      {
        title: 'Release Cover Image',
        name: 'release_image',
        type: 'image',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        media: 'release_image',
      },
    },
  };