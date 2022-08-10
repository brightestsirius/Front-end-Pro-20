// [Country, Flag, Population, Land Area]
const COUNTRIES = [
    [`Australia`, `🇦🇺`, 25499884, 7682300],
    [`Austria`, `🇦🇹`, 9006398, 82409],
    [`Cambodia`, `🇰🇭` ,16718965, 176520],
    [`Iceland`, `🇮🇸`, 341243, 100250]
];

const TABLE_THEAD = [`Country`, `Population`, `Land Area`];

const renderThead = thead => `<thead>
    <tr>
        ${thead.map(item => `<th>${item}</th>`).join(``)}
    </tr>
</thead>`;

const renderTbody = tbody => `<tbody>
    ${
        tbody
            .map(tr => `<tr>${tr.map(td => `<td>${td}</td>`).join(``)}</tr>`)
            .join(``)
    }
</tbody>`;

const sumOfArray = arr => arr.reduce((sum, item) => sum+item);

const renderTable = (thead, data) => {

    let tbody = JSON.parse(JSON.stringify(data))
        .map(country => {
            country[0] = `${country[0]} ${country[1]}`;
            country.splice(1,1);
            return country;
        })

    let PopulationSum = data.map(country => country[2]);
    let LandAreaSum = data.map(country => country[3]);

    let table = `<table>
        ${renderThead(thead)}
        ${renderTbody(tbody)}
        <tfoot>
            <tr>
                <td></td>
                <td>${sumOfArray(PopulationSum)}</td>
                <td>${sumOfArray(LandAreaSum)}</td>
            </tr>
        </tfoot>
    </table>`;

    document.write(table);
}

renderTable(TABLE_THEAD, COUNTRIES);

// Object
// Object.keys
// Object.assign()
// Prototype
// Object.create
// function-constructor
// Class