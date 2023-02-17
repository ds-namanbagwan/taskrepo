import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
// import BreadCrumbs from "../components/layouts/Breadcrumb";
// import constant from "../constant";
// import Banner from "../components/locationDetail/Banner";
import PageLayout from "../components/layouts/PageLayout";
// import { favicon, stagingBaseurl } from "../../sites-global/global";
// import { StaticData } from "../../sites-global/staticData";
// import Header1 from "../components/layouts/header";
// import Banner1 from "../components/locationDetail/Banner1";
import Footer from "../components/layouts/footer";
import Footer1 from "../components/layouts/Footer1";
import Header1 from "../components/layouts/Header1";



/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "region",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.dm_directoryChildrenCount",
      "dm_directoryParents.meta.entityType",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.dm_directoryChildren.name",
      "dm_directoryChildren.dm_directoryChildren.id",
      "dm_directoryChildren.dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildren.address"
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["ce_region"],
      savedFilterIds: ["dm_stores-directory_address_region"]
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};


export const getPath: GetPath<TemplateProps> = ({ document }) => {
  let url = "";
  document.dm_directoryParents.map((i: any) => {
    if (i.meta.entityType.id == 'ce_country') {
      url += i.slug + "/";
    }
  });
  url += document.slug.toString();

  return url + '.html';
};


// export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
//   return [`index-old/${document.id.toString()}`];
// };


export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  var canonical="";
  document.dm_directoryParents.map((entity: any) => {
    
      canonical=entity.slug.toLowerCase();
    })
   
   
    return {
        title: document.name,
        charset: "UTF-8",
        viewport: "width=device-width, initial-scale=1",
        tags: [
          {
            type: "meta",
            attributes: {
              name: "description",
              content: document.description,
            },
          },
          {
            type: "link",
            attributes: {
              rel: 'icon',
              type: 'image/x-icon',
              
            },
          }
        ],
      };
};

const region: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const {
    name,
    _site,
    slug,
    address,
    c_banner_image,
    c_bannerHeading,
    dm_directoryParents,
    dm_directoryChildren
  } = document;
  // console.log(document.dm_directoryParents[1],document.slug,dm_directoryChildren[1].slug,"ejdmgdvhbdkgdafgzdfj")
  const childrenDivs = dm_directoryChildren ? dm_directoryChildren.map((entity: any) => {
    var detlslug;

    //var name : any= "/"+document.dm_directoryParents[1].slug+"/"+document.slug+"/"+dm_directoryChildren[1].slug;

    //console.log(name,"hdf");
    //var string: any = name.toString();
    //let result: any = string.replaceAll(" ", "-");
    if (typeof entity.dm_directoryChildren != "undefined") {

      if (entity.dm_directoryChildrenCount == 1) {
        entity.dm_directoryChildren.map((res: any) => {
            //detlslug = `/${res.id.toString()}.html`;
            detlslug = "/"+res.id;
            console.log(detlslug,"dsdddsv");
        })
      } else {
        detlslug = slug + "/" + entity.slug + ".html";

      }

    }

    return (
      <li className=" storelocation-category">
        <a
          key={entity.slug}
          href={detlslug}
        >
          {entity.name} ({entity.dm_directoryChildrenCount})
        </a>
      </li>
    )
  }) : null;

 

  let bannerimage = c_banner_image && c_banner_image.image.url;
  return (
    <>
        <Header1 _site={_site}/>
        
          {/* <div className="location-dtl">     <Banner name={c_bannerHeading?c_bannerHeading:name} c_bannerImage={bannerimage}  /></div> */}
          {/* <Banner1 _site={_site}/> */}

          {/* <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
            address={address}
          ></BreadCrumbs> */}

          <div className="content-list">
            <div className="container">
            <div className="sec-title">
                <h2 style={{ textAlign: "center" }}>
              {name}
                </h2>
              </div>
              <ul className="region-list" style={{justifyContent:"center"}}>

                {childrenDivs}
              </ul>

            </div>
          </div>

          <Footer1 _site={_site}/>
        
    </>
  )
}
export default region;
