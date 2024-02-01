import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Link from 'next/link';
import classes from './project.module.scss';

function ProjectSidebar({ project }) {
    console.log(project);
    return (
        <Col lg={{ span: 3 }}>
            {/* {project?.map((sidebarItem) => ( */}
            <div className="sidebar pt-max-md-25">
                <div className={`${classes.sidebar_widget} mb-30`}>
                    <h2 className={classes.sidebar_widget__title}>
                        Project Info
                    </h2>
                    <ul className={classes.sidebar_list}>
                        {project.sidebarList?.map((singleList) => (
                            <li
                                dangerouslySetInnerHTML={{
                                    __html: singleList.listItem,
                                }}
                                key={singleList.id}
                            />
                        ))}
                    </ul>
                </div>
                {/* <div
                        className={`${classes.sidebar_brochure__widget}  mb-30`}
                    >
                        <ul className={`${classes.sidebar_brochure__list}`}>
                            {sidebarItem?.downloadBrochure?.map(
                                (brochureItem) => (
                                    <li key={brochureItem.id}>
                                        <Link
                                            href={brochureItem?.path}
                                            download
                                        >
                                            {brochureItem?.listItem}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </div> */}
                {/* <div className={`${classes.sidebar_widget__banner}`}>
                        <img
                            src={sidebarItem?.widgetBanner}
                            alt={sidebarItem?.widgetBannerAlt}
                        />
                    </div> */}
            </div>
            {/* ))} */}
        </Col>
    );
}

ProjectSidebar.propTypes = {
    project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectSidebar;
