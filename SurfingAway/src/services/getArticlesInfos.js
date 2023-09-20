const getArticlesInfos = async () => {
  try {
    const response = await fetch(
      `http://192.168.8.82:3000/articles`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    let arrayData = []
    for (let i = 0; i < data.length; i++) {
      const element = []
      element.push(data[i]._id);
      element.push(data[i].title);
      element.push(data[i].description);
      element.push(data[i].author);
      element.push(data[i].keywords);
      arrayData.push(element)
    }
    //[id, title, description, author, keywords]

    console.log("articles infos datas fetch successfully");
    return arrayData;
  } catch (error) {
    console.error(error + "impossible to fetch articles");
    throw error;
  }
};

export default getArticlesInfos;
