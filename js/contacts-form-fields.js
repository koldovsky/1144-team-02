const fields = [
  {
    type: "text",
    name: "Name",
    placeholder: "Name"
  },
  {
    type: "number",
    name: "Phone number",
    placeholder: "Phone number"
  },
  {
    type: "Number of guests",
    name: "Number of guests",
    placeholder: "Number of guests"
  },
  {
    type: "date",
    name: "date",
  },
  {
    type: "submit",
    value: "Reserve"
  }
];

const formFieldsHtml = `
  <form
    class="contacts__forms-reservation"
    action="https://formspree.io/f/xxx"
    method="post"
  >
    <input
      type=${fields[0].type}
      name=${fields[0].name}
      placeholder=${fields[0].placeholder}
      required
      class="contacts__forms-reservation-field"
    />
    <input
      type=${fields[1].type}
      name=${fields[1].name}
      placeholder=${fields[1].placeholder}
      required
      class="contacts__forms-reservation-field"
    />
    <input
      type=${fields[2].type}
      name=${fields[2].name}
      placeholder=${fields[2].placeholder}
      required
      class="contacts__forms-reservation-field"
    />
    <input
      type=${fields[3].type}
      name=${fields[3].name}
      required
      class="contacts__forms-reservation-field"
    />
    <input
      type=${fields[4].type}
      value=${fields[4].value}
      class="contacts__forms-reservation-submit"
    />
  </form>
`;
const formFieldsContainer = document.querySelector(".contacts__forms-form");
formFieldsContainer.innerHTML = formFieldsHtml;