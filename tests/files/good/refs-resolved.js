require('../../test-environment.js');

env.resolved.refs =
{
  'swagger': '2.0',
  'info': {
    'version': '1.0.0',
    'description': 'This file includes all three types of $ref pointers (relative, shorhand, and external)',
    'title': 'refs'
  },
  'paths': {
    '/pets': {
      'post': {
        'responses': {
          '200': {
            'description': 'A shorthand $ref pointer',
            'schema': {
              '$ref': 'pet'
            }
          },
          '500': {
            'description': 'An external $ref pointer',
            'schema': {
              '$ref': './error.json'
            }
          },
          'default': {
            'description': 'A really roundabout way to get to "pet"',
            'schema': {
              '$ref': '#/paths//pets/post/responses/200/schema'
            }
          }
        },
        'parameters': [
          {
            'required': true,
            'schema': {
              '$ref': '#/definitions/pet'
            },
            'description': 'A document-relative $ref pointer',
            'in': 'body',
            'name': 'pet'
          }
        ]
      }
    }
  },
  'definitions': {
    'pet': {
      '$ref': 'pet.yaml'
    }
  }
};
