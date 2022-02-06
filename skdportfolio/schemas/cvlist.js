export default {
    name: 'cvlist',
    title: 'Cv list',
    type: 'document',
    fields: [
        {
        name: 'employee',
        title: 'Employee',
        type: 'string'
    }
    ],
    preview:  {
            select: {
            title: 'employee',
        }
        }
    }