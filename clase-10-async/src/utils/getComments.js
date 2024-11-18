export const getComments = async () => {
  const url = `https://jsonplaceholder.typicode.com/comments`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);
  return data;
};

export const postComment = async (postId, id, name, email, body) => {
  const url = `https://jsonplaceholder.typicode.com/posts`;

  const data = {
    postId: postId,
    id: id,
    name: name,
    email: email,
    body: body,
  };

  const petition = fetch(url, {
    method: "POST",
    body: JSON.stringify({
      data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const response = petition.json()
  console.log(response);
};
