export default async function getVarieties(req, res) {
  var varieties = [];
  try {
    fetch(
      `https://t3p5d5xy.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20'variety'%5D%7Bname%7D`
    )
      .then((response) => response.json())
      .then((data) => {
        varieties = data.result;
        return res.status(200).json({ varieties });
      });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: `Error fetching varieties`, err });
  }
}
