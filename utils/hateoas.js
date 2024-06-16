const HATEOAS = async (data, count) => {
    const _data = data.map((item) => {
    return {
        nombre: item.nombre,
        href: `http://localhost:3000/api/v1/joyas/${item.id}`,
    }
    })
    const totalJoyas = Number(count);
    return  { totalJoyas, data:_data };
};

export default HATEOAS;
