//       Plane

// Airliner   Aerobatic

// Boeing737   Extra330

// The Boeing 737 has a maximum crosswind component of 35 knots if the runway is perfectly dry, or 15 knots if the runway is wet.
// The Boeing 737: 108 to 215 passengers.

// Extra 330 has a maximum crosswind component of 14 knots if the runway is perfectly dry, or 12 knots if the runway is wet.

const CROSSWIND = 15;
const RUNAWAY = `wet`;
const CURRENT_PASSANGERS = 220;

const planes = [
    {
        name: `Boeing 737`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 15
        },
        passengers: {
            min: 108,
            max: 215
        }
    },
    {
        name: `Airbus 300`,
        type: `Airliner`,
        crosswind: {
            dry: 35,
            wet: 20
        },
        passengers: {
            min: 100,
            max: 230
        }
    },
    {
        name: `Extra 330`,
        type: `Aerobatic`,
        crosswind: {
            dry: 14,
            wet: 12
        }
    },
    {
        name: `Mig 29`,
        type: `Fighter Jet`,
        crosswind: {
            dry: 18,
            wet: 16
        }
    }
];