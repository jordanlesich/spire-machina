const wizardStats = {
    health: 64,
    energy: 3
    }
    const wizardCards = [
        {
            name: 'Wack',
            actions: [{type: 'attack', power : 4}],
            cost: 1,
            quantity: 6,
        },
        {
            name: 'Block',
            effect: [{type: 'block', power : 6}],
            cost: 1,
            quantity: 6,
        },
        {
            name: 'Beam Shield!',
            effect: [{type: 'block', power : 8}, {type: 'makeWeak', power : 2}],
            cost: 1, 
            quantity: 1
        },
        {
            name: 'Beam of Ending!',
            effect: [{type: 'attack', power: 24},],
            cost: 3, 
            quantity: 1
        },
    ]

    const orbStats = {
        name: 'Red Orb of Red!',
        health: 32,
        moves: [
            {name: 'Back Slash', effect: [{type: 'damage', power: 10}]},
            {name: 'Embolden!', effect: [{type: 'heal', power: 2}, {type: 'block', power: 2}, {type: 'gainStrength', power: 4} ]},
            {name: 'Rock Hide', effect: [{type: 'block', power: 10}] }
        ]
    }