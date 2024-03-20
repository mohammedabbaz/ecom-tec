export default{
    title:'Banner',
    name:'banner',
    type:'document',
    fields:[ 
        
        {
            title:'Image',
            name:'image',
            type:'image',
        },
        {
        title:'product',
        name:'product',
        type:'reference',
      to:{
        type:'product'
      }
    },
    {
        title:'description',
        name:'description',
        type:'text',
    },
    
    {
        title:'smalltitle',
        name:'smalltitle',
        type:'string',
    },]
}