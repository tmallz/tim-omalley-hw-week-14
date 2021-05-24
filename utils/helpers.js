module.exports = {
    format_date: (date) => {
        //from activity 14 stu_custom-helpers
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear() }`;
    },
  };
  