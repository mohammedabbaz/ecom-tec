export default{
    title:'CartItem',
    name:'cartItem',
    type:'document',
    fields:[ 
        
        {
            title:'quantity',
            name:'quantity',
            type:'number',
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
        title:'user',
        name:'user',
        type:'string',
     
      
    },

]
   
}