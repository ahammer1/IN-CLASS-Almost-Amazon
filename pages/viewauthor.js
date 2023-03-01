import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  const domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
   <h1> ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h1>
   Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
  </div>;`;

  return renderToDOM('#view', domString);
};

export default viewAuthor;
