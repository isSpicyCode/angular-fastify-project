export const contactSchema = {
  schema: {
    body: {
      type: 'object',
      required: ['nom','prenom','email','message'],
      properties: {
        nom:     { type:'string', minLength:2, maxLength:50, pattern:'^[A-Za-zÀ-ÿ\\s\\-\']+$' },
        prenom:  { type:'string', minLength:2, maxLength:50, pattern:'^[A-Za-zÀ-ÿ\\s\\-\']+$' },
        email:   { type:'string', format:'email', maxLength:100 },
        message: { type:'string', minLength:10, maxLength:1000 }
      },
      additionalProperties:false
    }
  }
};
