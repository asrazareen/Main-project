const Schema = {
    name: {
      validate: (value) => {
        if (value.length < 5) {
          return 'Name must be at least 5 characters';
        }
      },
      required: 'Name is required',
    },
    description: {
      validate: (value) => {
        if (value.split(' ').length < 10) {
          return 'Description must be at least 10 words';
        }
      },
      required: 'Description is required',
    },
    startDate: {
      validate: (value) => {
        if (!value) {
          return 'Start date is required';
        }
      },
    },
    endDate: {
      validate: (value, values) => {
        if (!value) {
          return 'End date is required';
        } else if (values.startDate && value < values.startDate) {
          return 'End date must be after start date';
        }
      },
    },
  };
  
  export default Schema;
  