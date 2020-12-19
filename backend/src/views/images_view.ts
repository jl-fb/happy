import Image from '../models/Image';

export default {
  render(image: Image): unknown {
    return {
      id: image.id,
      url: `http://192.168.0.108:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]): unknown {
    return images.map((image) => this.render(image));
  },
};
