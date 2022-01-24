import { makeAPIRequest } from "@/utils/request"

export default class OtuService {

  static getTaxonNameCitations (taxonId) {
    return makeAPIRequest.get('/citations.json', { 
      params: {
        citation_object_id: taxonId,
        citation_object_type: 'TaxonName',
        extend: ['source']
      }
    })
  }

  static getOtu (id) {
    return makeAPIRequest.get(`/otus/${id}`)
  }

  static getTaxon (id) {
    return makeAPIRequest.get(`/taxon_names/${id}`)
  }

  static getOtuImages (otuId) {
    return makeAPIRequest.get('/images.json', { 
      params: {
        per: 5,
        otu_id: otuId
      }
    })
  }
}