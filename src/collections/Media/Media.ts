import { CollectionConfig } from 'payload/types'
import { tenants } from '../Shared/access/tenants'
import { loggedIn } from '../Shared/access/loggedIn'
import { tenantAdmins } from '../Shared/access/tenantAdmins'
import { tenant } from '../../fields/tenant'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  access: {
    read: tenants,
    create: loggedIn,
    update: tenantAdmins,
    delete: tenantAdmins,
  },
  fields: [
    tenant
  ],
}