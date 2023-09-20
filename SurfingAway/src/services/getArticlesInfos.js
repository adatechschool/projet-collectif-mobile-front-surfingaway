const getArticlesInfos = async () => {
  try {
    const response = await fetch(
      `http://10.0.0.223:3000/articles`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    let arrayData = []
    //[title, description, author, keywords]
    arrayData.push(data[2].title)
    arrayData.push(data[2].description)
    arrayData.push(data[2].author)
    arrayData.push(data[2].keywords)

    console.log("articles infos datas fetch successfully");
    return arrayData;
  } catch (error) {
    console.error(error + "impossible to fetch articles");
    throw error;
  }
};

export default getArticlesInfos;
