describe('Star Wars Planeta', () => {
    it('Get no planeta específico', () => {
                
        cy.request('planets/1/')
            .then((res) => {
            expect(res.body).to.have.property('name', 'Tatooine');
            expect(res.body).to.have.property('rotation_period', "23");
            expect(res.body).to.have.property('orbital_period', "304");
            expect(res.body).to.have.property('diameter', '10465');
            expect(res.body).to.have.property('climate', 'arid');
            expect(res.body).to.have.property('gravity', '1 standard');
            expect(res.body).to.have.property('terrain', 'desert');
            expect(res.body).to.have.property('surface_water', '1');
            expect(res.body).to.have.property('population', '200000');
         })
    })

  })