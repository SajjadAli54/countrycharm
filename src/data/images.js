export default function getImage(id, cat) {
    let img
    switch (cat) {
        case 'Food':
            img = `https://foodish-api.herokuapp.com/images/dosa/dosa${id}.jpg`
            break;
        case 'Place':
            img = `https://picsum.photos/200/300`
            break;
        default:
            img = `http://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_00${id}.jpg`
    }
    return img
}