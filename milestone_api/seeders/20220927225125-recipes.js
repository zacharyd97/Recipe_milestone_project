'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('recipes', [
      {
        cuisine_id: 1,
        name: "Kung Pao Chicken",
        author: "Antono",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet odio et elit volutpat blandit vel vel arcu. Fusce non vehicula ante. Curabitur efficitur urna a massa ornare lobortis. Quisque sagittis metus quis nisl sollicitudin lobortis vitae vitae nulla. Nulla facilisi. Donec dapibus lacus non nibh eleifend elementum. Pellentesque tincidunt ut metus nec dapibus. Donec mauris mauris, aliquam ut magna ac, efficitur sollicitudin nisl. Integer pulvinar eu magna a efficitur. Quisque gravida dapibus elit, eget blandit neque dictum quis. Sed sed justo libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida vel felis vel rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse suscipit lobortis auctor. Nunc auctor venenatis turpis, a lacinia ex posuere feugiat. Curabitur quam nulla, laoreet at arcu faucibus, tincidunt maximus elit. Morbi quis malesuada sem, ut interdum metus. Ut varius lacinia consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis ut mattis velit."
      },
      {
        cuisine_id: 1,
        name: "Dim Sum",
        author: "Charla",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin viverra tortor efficitur felis tempus pulvinar. Praesent sit amet convallis tortor. Vivamus ligula urna, molestie eleifend porttitor a, varius quis dolor. Cras ligula magna, ornare id tortor vel, scelerisque eleifend urna. Integer molestie id nulla quis pellentesque. In rutrum eu eros a elementum. Duis semper neque aliquet, commodo risus sit amet, suscipit urna. Donec tellus nulla, vehicula nec semper nec, pellentesque a mi. Etiam ut neque efficitur, rutrum justo vitae, pellentesque quam. Suspendisse potenti. Curabitur porta sapien in tortor sodales interdum. Quisque mi sapien, eleifend blandit porttitor nec, facilisis sed nisl. Sed vitae justo at sem pulvinar lacinia.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu nulla, tincidunt vitae porta in, ornare eu augue. Aenean ullamcorper ante vel mi condimentum molestie. Aenean quis tristique velit, luctus hendrerit enim. Nullam eleifend nisi eget lobortis dapibus. Cras quam velit, mollis ac libero quis, cursus euismod tortor. Nam eget tellus sit amet augue interdum bibendum. Aenean tellus dolor, elementum et velit id, auctor lobortis urna. Nunc vitae volutpat diam. Integer vitae fringilla purus. Mauris nec rutrum lectus. Fusce finibus, neque at commodo blandit, arcu leo imperdiet urna, vitae posuere elit libero in dui. Praesent commodo orci eget elementum blandit."
      },
      {
        cuisine_id: 2,
        name: "Enchilada",
        author: "Pearce",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nec metus non rutrum. Integer nec nunc ut enim efficitur aliquet eget vitae elit. Mauris rhoncus eros tellus, vitae tempor massa maximus nec. Fusce pulvinar massa dolor, non laoreet odio finibus eget. Suspendisse potenti. Maecenas eu lobortis justo. Proin ligula ante, porta et sapien sed, pharetra congue felis. Etiam at magna massa. Donec faucibus vestibulum mi, eget aliquet massa pellentesque eget. Fusce lacinia lacinia porta. Quisque dapibus tempus interdum. Etiam sed pulvinar orci, nec semper justo. Nullam ut lectus et sem rutrum tempus quis at mauris. Suspendisse imperdiet at nulla at tristique. Sed elementum, neque at elementum imperdiet, lacus ligula euismod ex, vel tincidunt ante enim vel velit.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a lacus urna. Pellentesque at convallis metus. Ut sit amet tellus et tellus efficitur consectetur. Nam venenatis scelerisque gravida. Aliquam iaculis aliquet libero nec maximus. Nullam a lorem quis ipsum porttitor dapibus. Ut fermentum erat sit amet sagittis molestie. Duis accumsan lacinia tincidunt."
      },
      {
        cuisine_id: 2,
        name: "Tamale",
        author: "Sofija",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae cursus ligula. Nullam eget dolor fermentum, posuere felis in, tempor ligula. Nullam arcu risus, bibendum nec maximus eu, varius vel ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut mattis lacinia lorem, in varius nisl congue sed. Pellentesque vestibulum erat nisl, vitae egestas arcu varius vel. Duis congue, urna at elementum feugiat, magna libero gravida arcu, ut semper risus est semper dui. Mauris dignissim felis purus, eu egestas nulla consectetur a. Pellentesque aliquet orci id tempor hendrerit. Integer ex metus, egestas id placerat eu, luctus quis est.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor interdum mauris eu viverra. Integer et hendrerit libero. Donec porttitor sem non risus ultricies rhoncus. Curabitur et est porta, finibus nisl nec, tincidunt ante. Vestibulum sit amet bibendum leo. Pellentesque ac mi pharetra lacus varius efficitur. Nullam finibus luctus ipsum sed mollis. Mauris dapibus enim id libero dictum, et luctus tellus volutpat. Nulla facilisi. Nulla molestie mi non dui lacinia venenatis. Suspendisse sodales tellus vel vestibulum interdum. Nam id rutrum erat. Proin condimentum pharetra mattis. Donec finibus dui odio, non maximus tellus egestas at."
      },
      {
        cuisine_id: 3,
        name: "Risotto",
        author: "David",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur quam felis, et posuere mauris mollis vitae. Morbi vel efficitur lacus, vitae hendrerit neque. Nulla aliquam placerat felis. Etiam mollis eros rutrum, consequat erat eget, placerat augue. Duis id leo at nibh posuere mattis quis ultrices metus. Nam luctus dignissim tellus, vel molestie enim sollicitudin a. Cras porta tristique neque, at ornare eros fringilla sit amet. Ut vel risus auctor, aliquam nisl at, ultrices ligula. Ut lacinia est at odio eleifend, vitae tincidunt erat lacinia. Curabitur vestibulum tristique posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim scelerisque tellus, quis mollis est. Nunc mollis vel erat ut egestas. Curabitur et sem eget lorem commodo porta. Quisque quis placerat diam. Vestibulum auctor sapien ligula, in venenatis tellus dictum et. Fusce rutrum iaculis arcu, eget malesuada eros cursus quis. Donec sed ipsum orci. Integer euismod enim sit amet justo tristique, in ornare ipsum sodales. Sed at nisl a lacus lacinia feugiat at eu tellus. Aliquam euismod feugiat diam. Integer auctor sem ac libero hendrerit cursus. Pellentesque non dui id est ultricies finibus sit amet mollis tortor. Cras ut placerat libero. Vestibulum sit amet justo vestibulum, lobortis nisi vel, egestas diam. Etiam id purus dui."
      },
      {
        cuisine_id: 3,
        name: "Pizza",
        author: "Nousha",
        image_url: "https://placeimg.com/640/480/any",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum, ipsum condimentum gravida porta, ante quam efficitur leo, ac consectetur orci leo vel nisl. Nullam eu mi purus. In porta felis et condimentum venenatis. Proin eget tincidunt lectus. Praesent at nulla tellus. Suspendisse sed velit nunc. Donec feugiat elementum dolor. Praesent blandit mauris justo, et iaculis purus rutrum nec.",
        directions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, lacus nec vestibulum porttitor, lacus massa suscipit libero, a aliquet sem quam at lectus. Sed imperdiet, eros non sollicitudin mollis, augue neque imperdiet velit, in consectetur urna nulla porttitor magna. Etiam iaculis ante pellentesque, faucibus risus at, iaculis diam. Proin tempus nulla et imperdiet lobortis. Donec luctus ornare lacus quis tincidunt. Sed rhoncus ex ut accumsan blandit. Phasellus in molestie dolor. Praesent tortor risus, lacinia at erat id, elementum maximus risus. Nam sagittis placerat sem ac elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum eget justo tincidunt, vehicula ex sit amet, blandit justo. Nulla ac dolor hendrerit, condimentum lorem a, pharetra mauris. Etiam cursus gravida mi, eget tincidunt enim malesuada at."
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('recipes', null, {});
  }
};
