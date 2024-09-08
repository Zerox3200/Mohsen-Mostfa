import './Certifications.scss';
import { TotalCertifications } from './CertificationsFile';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Swal from 'sweetalert2';

export default function Certifications() {
    const CertifacteDetails = (Title, Img, Desc, Desc_Details, Skills) => {
        let skillItems = Skills.map((skill) => `<li>${skill}</li>`).join("");
        Swal.fire({
            showConfirmButton: false,
            backdrop: 'hsl(251.54deg 72.22% 50.59% / 38%)',
            html: `
            <div class="Inside_Sweet">
                <img src="${Img}" alt="Image" style="max-width: 100%; height: auto;" loading="lazy">
                <div class="Inside_Sweet_description">
                    <h1 class='h4'>${Title}</h1>
                    <p>${Desc ? Desc : ''}</p>
                    <p>${Desc_Details ? Desc_Details : ''}</p>
                    <ul>
                        ${skillItems ? skillItems : ''}
                    </ul>
                </div>
            </div>
        `,
            customClass: {
                popup: 'SweetDetails',
                closeButton: "Close"
            },
            showCloseButton: true
        });
    }

    return (
        <div className='Certifications'>
            {TotalCertifications.map((Certification, index) => (
                <div className="Certifications_pts" key={index}>
                    <h1 className='h5 mb-3'>{Certification.Title}</h1>
                    <a href={Certification.Link} target='_blank' rel="noreferrer"
                        className='Link'>Certificate Link</a>
                    <div
                        className={`Certification mt-3`}
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                             url('${Certification.img}')`
                        }}
                        onClick={() =>
                            CertifacteDetails(Certification.Title,
                                Certification.img,
                                Certification.Desc,
                                Certification.Details.Details_Desc,
                                Certification.Details.Skills,
                                Certification.Details.KeyPoints
                            )}
                    >
                        <ZoomInIcon />
                    </div>
                </div>
            ))}

        </div>
    )
}
