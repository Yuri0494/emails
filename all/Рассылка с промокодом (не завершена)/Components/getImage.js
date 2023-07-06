export default function getImage (image, href, width = '100%') {
    return `
    <tr>
        <td>
        <a href="${href}" target="_blank">
            <img src="${image}" alt="divan.ru" style="width: ${width};">
        </a>
        </td>
    </tr>
  `
}