const getArticles = async () => {
  try {
    const response = await fetch(
      `http://192.168.8.82:3000/articles`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("articles infos datas fetch successfully");
    return data;
  } catch (error) {
    console.error(error + "impossible to fetch articles");
    throw error;
  }
};

export default getArticles;